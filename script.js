document.getElementById('eventForm').addEventListener('submit',function(e){
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventLocation = document.getElementById('eventLocation').value;


     
    const eventItem = document.createElement('li');
    eventItem.innerHTML = `
        <h3>${eventName}</h3>
        <p>Date: ${eventDate}</p>
        <p>Time: ${eventTime}</p>
        <p>Location: ${eventLocation}</p>
    `;

    
    document.getElementById('events').appendChild(eventItem);

    
    document.getElementById('eventForm').reset();
});
    