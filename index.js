let npmExecPath = process.env.npm_execpath || '';

let usingPackageManager = null;

if (npmExecPath.includes('pnpm')) {
    usingPackageManager = 'pnpm'
} else if (npmExecPath.includes('npm')) {
    usingPackageManager = 'npm'
} else if (npmExecPath.includes('yarn')) {
    usingPackageManager = 'yarn'
}

export default usingPackageManager