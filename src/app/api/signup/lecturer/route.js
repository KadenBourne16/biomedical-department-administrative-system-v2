export async function POST(req){
    const body = await req.json();
    if(!body){
        throw new Error("No data found");
    }

    


    return new Response({message: "Successfully Obtained"}, {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
}