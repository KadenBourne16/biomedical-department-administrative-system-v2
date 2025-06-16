let clients = [];

export async function GET(request) {
  const encoder = new TextEncoder();
  let thisController = null; // <-- capture for this connection

  const stream = new ReadableStream({
    start(controller) {
      thisController = controller;
      clients.push(controller);
      console.log(`SSE client connected. Total clients: ${clients.length}`);
      controller.enqueue(encoder.encode(": connected\n\n"));
    },
    cancel() {
      // Remove only this connection's controller
      clients = clients.filter(c => c !== thisController);
      console.log(`SSE client disconnected. Total clients: ${clients.length}`);
    }
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}

export function broadcastUpdate(data) {
  const encoder = new TextEncoder();
  const message = `data: ${JSON.stringify(data)}\n\n`;
  clients.forEach(controller => {
    controller.enqueue(encoder.encode(message));
  });
}