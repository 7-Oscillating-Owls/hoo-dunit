import axios from 'axios';

export const postInteraction = (interaction) => axios.post('/api/interactions', interaction);

const Interactions = {
  postInteraction,
};

export default Interactions;
