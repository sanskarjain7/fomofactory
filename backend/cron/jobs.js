import { CronJob } from 'cron';
import getData from '../service/cryptoDataService.js';

const job = new CronJob('*/60 * * * * *', getData, null, true, 'America/Los_Angeles');

export default job;