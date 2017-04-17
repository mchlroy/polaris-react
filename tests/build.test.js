const execSync = require('child_process').execSync;
const fs = require('fs-extra');

describe('build', () => {
  it('should generate CDN files in ./build', () => {
    execSync('yarn run build');
    expect(fs.existsSync('./build/quilt.css')).toBe(true);
    expect(fs.existsSync('./build/quilt.min.css')).toBe(true);
    execSync('yarn run clean');
  });

  it('should generate lib files in ./', () => {
    execSync('yarn run build');
    expect(fs.existsSync('./index.js')).toBe(true);
    expect(fs.existsSync('./index.es.js')).toBe(true);
    expect(fs.existsSync('./styles.css')).toBe(true);
    execSync('yarn run clean');
  });

  it('should generate a ./styles/components dir with Icon.scss', () => {
    execSync('yarn run build');
    expect(fs.existsSync('./styles/components/Icon.scss')).toBe(true);
    execSync('yarn run clean');
  });
  it('should generate a ./styles/foundation dir with spacing.scss', () => {
    execSync('yarn run build');
    expect(fs.existsSync('./styles/foundation/spacing.scss')).toBe(true);
    execSync('yarn run clean');
  });
  it('should generate sass entries files in ./styles dir', () => {
    execSync('yarn run build');
    expect(fs.existsSync('./styles/global.scss')).toBe(true);
    expect(fs.existsSync('./styles/foundation.scss')).toBe(true);
    expect(fs.existsSync('./styles/components.scss')).toBe(true);
    execSync('yarn run clean');
  });
  it('should generate a ./styles.scss sass entry point in root', () => {
    execSync('yarn run build');
    expect(fs.existsSync('./styles.scss')).toBe(true);
    execSync('yarn run clean');
  });

  it('should generate a zip of ./build/sass', () => {
    execSync('yarn run build');
    expect(fs.existsSync('./build/sass.zip')).toBe(true);
    execSync('yarn run clean');
  });
});
