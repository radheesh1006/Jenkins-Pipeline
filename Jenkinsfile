pipeline {
    agent any

    tools {
        nodejs "nodejs"  // Matches your Jenkins tool name
    }

    environment {
        S3_BUCKET = 'reactmyproject'
        AWS_REGION = 'ap-south-1'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/radheesh1006/Jenkins-Pipeline/new/main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to S3') {
            steps {
                bat 'aws s3 sync build/ s3://%S3_BUCKET%/ --region %AWS_REGION% --delete'
            }
        }
    }
}
