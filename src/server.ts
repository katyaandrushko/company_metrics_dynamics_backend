import express from 'express'
import config from './config/config'
import UserRoute from './users/UserRoute'
import db from './config/db'
import cors from 'cors'
import CompanyRoute from './company/CompanyRoute'
import MetricsRoute from './metrics/MetricsRoute'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()
app.use(express.json())
app.use(cors())
db()

app.use('/api/users', UserRoute)
app.use('/companies', CompanyRoute)
app.use('/metrics', MetricsRoute)

app.listen(config.port, () => {
   console.log(`Server is running on port ${config.port}`)
})
const definition = {
   info: {
      title: 'Metrics dynamics',
      version: '1.0.0',
   },
}
var options = {
   definition,
   apis: ['**/*.ts'],
   explorer: true,
}
const swaggerSpec = swaggerJsdoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
