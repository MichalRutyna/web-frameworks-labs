const mongoose = require("mongoose")
const ObjectId = require('mongoose').ObjectId
const createServer = require("./server")
const Post = require('./models/Post.js')
const supertest = require('supertest')

beforeEach(async () => {
    await mongoose.connect(
        "mongodb://localhost/postsdb",
        {}
    )
    console.log("Connected")
})

afterEach(async () => {
    await mongoose.connection.db.dropDatabase()
    await mongoose.connection.close()
    console.log("Cleared")
})

const app = createServer()

test("GET /posts", async () => {
    const post = await Post.create({
        title: "Post 1",
        content: "Tekst postu 1",
        
    })
    await supertest(app)
        .get("/api/posts")
        .expect(200)
        .then((response) => {
            // Sprawdzenie typu i długości odpowiedzi
            expect(Array.isArray(response.body)).toBeTruthy()
            expect(response.body.length).toEqual(1)
            // Sprawdzenie danych odpowiedzi
            expect(response.body[0]._id).toBe(post.id)
            expect(response.body[0].title).toBe(post.title)
            expect(response.body[0].content).toBe(post.content)
        })
})

test("POST /api/posts", async () => {
    const data = {
        title: "Post 2",
        content: "Tekst postu 2",
    }
    await supertest(app)
        .post("/api/posts")
        .send(data)
        .expect(200)
        .then(async (response) => {
            // Sprawdzenie odpowiedzi
            expect(response.body._id).toBeTruthy()
            expect(response.body.title).toBe(data.title)
            expect(response.body.content).toBe(data.content)
            // Sprawdzenie danych w bazie
            await Post.findById(response.body._id).then((post) => {
                console.log("foo", post)

                expect(post).toBeTruthy()
                expect(post.title).toBe(data.title)
                expect(post.content).toBe(data.content)

            })
        }
        )
})


test("DELETE /api/posts", async () => {
    const post = await Post.create({
        title: "Post 3",
        content: "Tekst postu 3",
        
    })
    await supertest(app)
        .delete("/api/posts/" + post.id)
        .expect(200)
        .then((response) => {
            // Sprawdzenie typu i długości odpowiedzi
            expect(response.body._id).toBeTruthy()
            expect(response.body.title).toBe(post.title)
            expect(response.body.content).toBe(post.content)
        })
})