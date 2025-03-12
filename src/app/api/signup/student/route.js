import { createConnectionString } from "../../../../../lib/db_connection";
import { checkAndCreateTable, insertStudentQuery, checkExistingUser} from "@/app/sql/students/student_query";

export async function POST(req) {
  let connection;
  try {
    const body = await req.json(); // Get the raw text of the request body
    if (!body) {
      throw new Error('Request body is empty');
    }
    connection = await createConnectionString(); // Await the connection
    
    // Execute the query to check and create the table if it doesn't exist
    await connection.execute(checkAndCreateTable);

    // Check if the user already exists
    const existingUser  = await checkExistingUser (body, connection); // Await the checkExistingUser  function
    if (existingUser  === "Found") {
      return new Response(JSON.stringify({ message: "User  already exists in the database" }), {
        status: 409, // Conflict
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    // Insert the new student record
    const insertValues = insertStudentQuery(body);
    await connection.execute(insertValues); // Await the insert operation

    // Respond back to the client
    return new Response(JSON.stringify({ message: 'Data successfully saved', body }), {
      status: 201, // Created
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ message: 'Error processing data', error: error.message }), {
      status: 400, // Bad Request
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } finally {
    if (connection) {
      await connection.end(); // Ensure the connection is closed
    }
  }
}

export async function GET(){
  return Response.json("Recieved");
}