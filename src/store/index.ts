import { createStore, ActionContext } from 'vuex';

const API_URL = 'http://localhost:3000/api';

// Définir l'interface pour l'état du store
interface User {
  id: number;
  nom: string;
  prenom: string;
  adresse?: string;
  ville?: string;
  codepostal?: string;
  telephone?: string;
  email: string;
}

interface State {
  user: User | null;
  token: string | null;
  users: User[];
}

// Créer le store avec un typage explicite
export default createStore<State>({
  state: {
    user: null,
    token: null,
    users: [],
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
    getUsers: (state) => state.users,
    getToken: (state) => state.token,
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    },
    setToken(state, token: string) {
      state.token = token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.users = [];
    },
    setUsers(state, users: User[]) {
      state.users = users;
    },
    restoreSession(state) {
      const token = localStorage.getItem('token');
      const userString = localStorage.getItem('user');

      if (token) {
        state.token = token; // Toujours définir le token si présent
        if (userString) {
          try {
            const user = JSON.parse(userString);
            state.user = user; // Définir l'utilisateur si présent
          } catch (error) {
            console.error('Erreur lors du parsing JSON de l\'utilisateur:', error);
          }
        }
      }
    },
  },
  actions: {
    async login({ commit }: ActionContext<State, any>, { user, token }:
       { user: User; token: string }) {
      commit('setUser', user);
      commit('setToken', token);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem('token');
      localStorage.removeItem('user'); // Ajoutez cela pour supprimer l'utilisateur
    },
    async fetchUsers({ commit }) {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Aucun token trouvé. Utilisateur non authentifié.');
        return;
      }
      try {
        const response = await fetch(`${API_URL}/users/profile`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(`Erreur ${response.status}: ${errorResponse.message}`);
        }
        const result = await response.json();
        commit('setUser', result.user);
      } catch (err) {
        console.error('Erreur durant la récupération des utilisateurs:', err);
      }
    },
    async fetchUserProfile({ commit }, userId: number) {
      const response = await fetch(`${API_URL}/users/profile/${userId}`);
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(`Erreur ${response.status}: ${errorResponse.message}`);
      }
      const userData = await response.json();
      commit('setUser', userData);
    },
    async restoreSession({ commit }) {
      const userString = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (userString && token) {
        const user = JSON.parse(userString);
        commit('setUser', user);
        commit('setToken', token); // Assurez-vous de configurer le token ici
      } else {
        console.error('Utilisateur ou token manquant dans localStorage.');
      }
    },
    async updateUserProfile({ commit }, userData: User) {
      const token = localStorage.getItem('token');
      console.log('Token utilisé pour la requête:', token); // Log du token
      try {
        const response = await fetch(`${API_URL}/users/profile/${userData.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // En-tête d'autorisation
          },
          body: JSON.stringify(userData),
        });
        if (!response.ok) {
          const errorText = await response.text(); // Obtenir la réponse sous forme de texte
          console.error('Erreur dans la réponse:', errorText);
          throw new Error(`Erreur lors de la mise à jour du profil: ${errorText}`);
        }
        const updatedUser = await response.json();
        commit('setUser', updatedUser);
      } catch (error) {
        console.error('Erreur dans updateUserProfile:', error);
        throw error;
      }
    },
  },
  modules: {
  },
});
