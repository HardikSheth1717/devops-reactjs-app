module.exports = {
	apps: [
	  {
		name: "category-app",
		script: "serve -s build",
		watch: true,
		ignore_watch: ["node_modules"],
		env_production: {
		  REACT_APP_ENV: "production",
		  PORT: 3000
		},
		env_staging: {
		  REACT_APP_ENV: "staging",
		  PORT: 3000
		},
		env_development: {
		  REACT_APP_ENV: "development",
		  PORT: 3000
		},
	  },
	],
  };
  