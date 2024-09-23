import { NextResponse, NextRequest } from 'next/server';

let todos = []; // In-memory storage for simplicity

export async function GET(req:NextRequest) {
  return NextResponse.json(todos);
}

export async function POST(req:NextRequest) {
  const todo = await req.json();
  todos.push(todo);
  return NextResponse.json(todo, { status: 201 });
}

export async function PUT(req:NextRequest) {
  const { id, text } = await req.json();
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos[index].text = text;
    return NextResponse.json(todos[index], { status: 200 });
  }
  return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
}

export async function DELETE(req:NextRequest) {
  const { id } = await req.json();
  todos = todos.filter(todo => todo.id !== id);
  return NextResponse.json({ message: 'Deleted successfully' }, { status: 204 });
}