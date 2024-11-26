// Initialize Supabase client
// const supabaseClient = supabase.createClient(
//     'https://mwafnejtdykuseyscuuq.supabase.co',
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13YWZuZWp0ZHlrdXNleXNjdXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MzI2NTQsImV4cCI6MjA0ODEwODY1NH0.NrkjsOi-LzEDZ0nFgS9LLBntWdUrQK3TSsr6uqAxdxY',
//     { db: { schema: 'portfolio' } }
// );

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.target);

    // Collect form data
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    submitMessage(data);

    // Insert data into Supabase
    // try {
    //     const { error } = await supabaseClient
    //         .from('messages') // Replace with your table name
    //         .insert([data]);

    //     if (error) {
    //         console.error('Supabase Error:', error); // Log error for debugging
    //         document.getElementById('message').textContent = `Error: ${error.message}`;
    //     } else {
    //         document.getElementById('message').textContent = 'Message submitted successfully!';
    //         event.target.reset();
    //     }
    // } catch (err) {
    //     console.error('Unexpected Error:', err);
    //     document.getElementById('message').textContent = `Error: ${err.message}`;
    // }
}

async function submitMessage(data) {
    const response = await fetch('https://mwafnejtdykuseyscuuq.supabase.co/functions/v1/validate-origin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        document.getElementById('message').textContent = `Error`;
    } else {
        document.getElementById('message').textContent = 'Message submitted successfully!';
    }
    console.log(result);
}

// Attach the submit event handler to the form
document.getElementById('message-form').addEventListener('submit', handleFormSubmit);