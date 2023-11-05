steps:
  # Install dependencies and build
  - name: 'gcr.io/cloud-builders/npm'
    args: ['install']
    dir: 'drive-server'
  # Print the version of npm and node
  - name: 'gcr.io/cloud-builders/npm'
    args: ['--version']
    dir: 'drive-server'
  - name: 'gcr.io/cloud-builders/npm'
    args: ['run', 'env']
    dir: 'drive-server'
  # List the installed packages
  - name: 'gcr.io/cloud-builders/npm'
    args: ['list']
    dir: 'drive-server'
  # Run the TypeScript compiler
  - name: 'gcr.io/cloud-builders/npm'
    args: ['run', 'build']
    dir: 'drive-server'
