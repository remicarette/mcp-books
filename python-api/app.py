from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/books", response_class=JSONResponse)
async def root():
    print("Fetching books....")
    return [{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}, {"title": "1984", "author": "George Orwell"}]
