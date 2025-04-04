# MCP Books

A custom Multi-Context Protocol (MCP) for Cursor that allows you to fetch books information using natural language.

## Setup

### 1. Adding MCP to Cursor

1. In Cursor, go to Settings > Extensions
2. Click "Add MCP"
3. Add the following information:

```json
  "books MCP": {
      "command": "npm",
      "args": [
        "--prefix",
        ".../mcp-books/mcp-server",
        "run",
        "start"
      ]
    }
```

### 2. Running the Server

This project provides both Python and TypeScript implementations for the MCP server.

#### Python Implementation

1. Install dependencies:
```bash
pip install -r requirements.txt   
```

2. Start the FastAPI server:
```bash
fastapi run app.py
```

### 3. Example Prompts

Once the MCP is set up and the server is running, you can use the following example prompts in Cursor:

- "Find me books about artificial intelligence"
- "Get me books written by Stephen King"
- "Show me books published in 2023"
- "What are some popular science fiction books?"
- "Find me award-winning novels from the last 5 years"

## Project Structure

```
mcp-books/
├── app.py              # FastAPI application with sample book data
├── server.py           # Python MCP server implementation
├── ts-mcp/             # TypeScript MCP implementation
│   ├── src/
│   │   └── index.ts    # TypeScript MCP server
│   ├── package.json    # Node.js dependencies
│   └── tsconfig.json   # TypeScript configuration
└── README.md           # This documentation
```

## How It Works

1. The FastAPI server (app.py) provides an endpoint at `/books` that returns sample book data.
2. The MCP server (either Python or TypeScript) connects to the FastAPI server to fetch book data.
3. When a prompt is sent from Cursor to the MCP, it processes the query and returns the requested book information.

## Development

To extend this project:
- Add more data to the book API in `app.py`
- Enhance the query capabilities in the MCP implementation
- Add filtering and search functionality based on book properties

## License

This project is licensed under the MIT License. 