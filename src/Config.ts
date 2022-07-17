import { AbstractConfig } from 'core/lib/app/AbstractConfig';

const WEB_PORT = 3000;
const BODY_LIMIT = 10485760; // 10 MB;

export class Config extends AbstractConfig {
	public web = {
		port: this.getNumber('APP_PORT', WEB_PORT),
		bodyLimit: this.getNumber('BODY_LIMIT', BODY_LIMIT),
		appUrl: this.getString('APP_URL', 'localhost:3000'),
		corsOrigin: this.getString('WEB_CORS_ORIGIN', '*'),
	};
	public logger = {
		loggingType: this.getString('LOGGING_TYPE', 'json'),
	};
	public usage = {
		interval: this.getNumber('USAGE_INTERVAL', 60),
	};
	public infra = {
		db: {
			host: this.getString('DB_HOST'),
			port: this.getNumber('DB_PORT'),
			db: this.getString('DB_DB'),
			user: this.getString('DB_USER'),
			pass: this.getString('DB_PASS'),
		},
	};
}
