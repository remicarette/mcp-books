import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import axios from 'axios';

// Define a Book interface
interface Book {
  title: string;
  author: string;
  [key: string]: any; // For any additional fields
}

// Create an MCP server
const server = new McpServer({ name: 'Book API', version: '1.0.0' });

async function fetchBooks(): Promise<Book[]> {
  try {
    const response = await axios.get('http://localhost:8000/books');
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

server.tool(
  "fetchBooks",
  "Fetches books from the API",
  async () => {
    const books = await fetchBooks();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(books, null, 2)
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);
