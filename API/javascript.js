


$(document).ready(function() {
    var apiUrl = 'https://jsonplaceholder.typicode.com/users';

    $('#create').click(function() {
        var newItem = { name: 'New Item' };

        $.ajax({
            type: 'POST',
            url: apiUrl,
            contentType: 'application/json',
            data: JSON.stringify(newItem),
            success: function(data) {
                $('#output').text('Created: ' + JSON.stringify(data));
            }
        });
    });


    $('#read').click(function() {
        $.ajax({
            type: 'GET',
            url: apiUrl,
            success: function(data) {
                $('#output').text('Read: ' + JSON.stringify(data));
            }
        });
    });

    $('#update').click(function() {
        var updatedItem = { name: 'Updated Item' };
        var itemId = 1; 
        $.ajax({
            type: 'PUT',
            url: apiUrl + '/' + itemId,
            contentType: 'application/json',
            data: JSON.stringify(updatedItem),
            success: function(data) {
                $('#output').text('Updated: ' + JSON.stringify(data));
            }
        });
    });

    
    $('#delete').click(function() {
        var itemId = 1;

        $.ajax({
            type: 'DELETE',
            url: apiUrl + '/' + itemId,
            success: function() {
                $('#output').text('Item with ID ' + itemId + ' deleted.');
            }
        });
    });
});