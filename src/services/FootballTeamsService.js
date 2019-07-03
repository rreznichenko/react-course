import axios from 'axios';
import config from '../config';

class FootballTeamService {
  fetchData = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: {
      'X-RapidAPI-Key': config.apiKey,
      Accept: 'application/json'
    }
  });

  async getAllTeamsByCountry() {
    try {
      const leaguesResponse = await this.fetchData.get(`/leagues/country/${config.countryCode}`);
      const { leagues } = leaguesResponse.data.api;
      const league = leagues.find(item => item.name === config.leagueType);
      const teamsResponse = await this.fetchData.get(`/teams/league/${league.league_id}`);
      const { teams } = teamsResponse.data.api;
      return teams;
    } catch (error) {
      return [];
    }
  }
  async getTeamById(teamId) {
    try {
        const teamResponse = await this.fetchData.get(`teams/team/${teamId}`);
        return teamResponse.data.api.teams[0];
    } catch (error) {
        return {};
    }
  }
}

export default FootballTeamService;
