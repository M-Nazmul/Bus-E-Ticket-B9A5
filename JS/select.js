var totalCount = 16;
        var selectedCount = 0;

        function buttonClick(button) {
            if (button.classList.contains('bg-green-500')) {
                button.classList.remove('bg-green-500', 'text-white', 'hover:bg-green-500');
                button.classList.add('text-black');
                selectedCount--;
            } else {
                if (selectedCount < 4) {
                    button.classList.add('bg-green-500', 'text-white', 'hover:bg-green-500');
                    button.classList.add('text-black');
                    selectedCount++;
                } else {
                    alert("You can only select up to 4 seat.");
                }
            }
            document.getElementById("selectedCount").innerText = selectedCount;
            document.getElementById("totalCount").innerText = totalCount - selectedCount;
        }