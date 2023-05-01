import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    '@shared/(.*)$': ['<rootDir>/src/app/shared/$1'],
    '@services/(.*)$': ['<rootDir>/src/app/shared/services/$1'],
    '@models/(.*)$': ['<rootDir>/src/app/shared/models/$1'],
    '@utils/(.*)$': ['<rootDir>/src/app/shared/utils/$1'],
    '@pipes/(.*)$': ['<rootDir>/src/app/shared/pipes/$1'],
    '@components/(.*)$': ['<rootDir>/src/app/shared/components/$1'],
    '@constants/(.*)$': ['<rootDir>/src/app/shared/constants/$1'],
  },
  modulePaths: ['<rootDir>/<rootDir>/src'],
  moduleDirectories: ['node_modules', '<rootDir>'],
};

export default config;
