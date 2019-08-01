import axios from 'axios';
import config from '../config';
import FootballTeamService from './FootballTeamsService';


class FixturesService {
  fetchData = axios.create({
    baseURL: config.baseURL,
    timeout: config.timeout,
    headers: {
      'X-RapidAPI-Key': config.apiKey,
      Accept: 'application/json'
    }
  });

  async getAllFixtures() {
    try {
        const FTService = new FootballTeamService();
        await FTService.fetchLeagueId();
        const leagueId = FTService.getLeagueId();
        const fixturesResponse = await this.fetchData.get(`/fixtures/league/${leagueId}`);
        const { fixtures } = fixturesResponse.data.api;
        return fixtures;
    } catch (error) {
      return [];
    }
  }

  async getLiveFixtures() {
    try {
        const FTService = new FootballTeamService();
        await FTService.fetchLeagueId();
        const leagueId = FTService.getLeagueId();
        const fixturesResponse = await this.fetchData.get(`/fixtures/live/${leagueId}`);
        const { fixtures } = fixturesResponse.data.api;
        return fixtures;
    } catch (error) {
      return [];
    }
  }
}
export default FixturesService;
