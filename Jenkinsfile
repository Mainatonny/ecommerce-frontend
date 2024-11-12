pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'

            }
        }
        stage('Test') {
            steps {
                sh 'npm test' // Add tests if available

            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('ecommerce-backend:latest')

                }
            }

        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 5000:5000 ecommerce-backend:latest'
            }
        }
    }
}