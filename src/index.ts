import express, { Request, Response } from 'express'
import cors from 'cors'
import { AccountDB, UserDB } from './types'
import { User } from './models/User'
import { Account } from './models/Account'
import { UserDatabase } from './database/UserDatabase'
import { AccountDatabase } from './database/AccountDatabase'
import { UserController } from './controller/UserController'
import { AccountController } from './controller/AccountController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})


const userController = new UserController()
const accountController = new AccountController()

app.get("/users", userController.getUsers)

app.post("/users", userController.createUser)

app.get("/accounts", accountController.getAccounts)

app.get("/accounts/:id/balance", accountController.getAccountBalance)

app.post("/accounts", accountController.createAccount)

app.put("/accounts/:id/balance", accountController.editBalance)