const state = {
	all: []
};

const actions = {
	addError({ commit }: any, error: any) {
		commit('addError', error);
	},
	deleteError({ commit }: any, name: any) {
		commit('deleteError', name);
	}
};

const mutations = {
	addError(state: any, error: any) {
		const alreadyExists = state.all.find((p: any) => p.name === error.name);
		error.date = Date.now();

		// If already exists, replace with new error
		if (alreadyExists) {
			const index = state.all.indexOf(alreadyExists);
			state.all[index] = error;
		} else {
			state.all.push(error);
		}
	},
	deleteError(state: any, name: any) {
		const error = state.all.find((p: any) => p.name === name);

		if (error) {
			state.all.splice(state.all.indexOf(error), 1);
		}
	}
};

const getters = {
	allErrors(state: any) {
		return state.all;
	},
	findError: (state: any) => (name: number) => {
		return state.all.find((p: any) => p.name === name);
	}
};

const errors = {
	state,
	actions,
	mutations,
	getters
};

export default errors;
