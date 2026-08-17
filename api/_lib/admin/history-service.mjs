import { writeMode } from './config.mjs';
import { repositoryService } from './repository.mjs';

export class AdminHistoryService {
  constructor(repository = repositoryService()) {
    this.repository = repository;
  }

  async list() {
    const history = await this.repository.listAdminCommits({ limit: 50 });
    return {
      mode: writeMode(),
      available: this.repository.historyAvailable === true,
      ...history
    };
  }
}
