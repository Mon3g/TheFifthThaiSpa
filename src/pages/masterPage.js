// Theme colors
const theme = {
    primary: '#FF1493',    // Pink
    secondary: '#FFD700',  // Golden Yellow
    background: '#FFFFFF', // White
    surface: '#F5F5F5',   // Light Gray
    text: '#333333'       // Dark Gray for text
};

$w.onReady(function () {
    // Apply global styles
    if ($w('Document')) {
        $w('Document').style.backgroundColor = theme.background;
    }
    
    // Style header elements
    if ($w('#siteHeader')) {
        $w('#siteHeader').style.backgroundColor = theme.primary;
        $w('#siteHeader Text').style.color = theme.background;
    }

    // Style navigation
    if ($w('#mainNav')) {
        $w('#mainNav').style.backgroundColor = theme.primary;
        $w('#mainNav Link').style.color = theme.background;
    }

    // Style footer
    if ($w('#siteFooter')) {
        $w('#siteFooter').style.backgroundColor = theme.surface;
        $w('#siteFooter Text').style.color = theme.text;
    }

    // Global button styles
    $w('Button').forEach(button => {
        if (button) {
            button.style.backgroundColor = theme.secondary;
            button.style.color = theme.text;
            button.style.borderColor = theme.primary;

            // Hover effect
            button.onMouseIn(() => {
                button.style.backgroundColor = theme.primary;
                button.style.color = theme.background;
            });

            button.onMouseOut(() => {
                button.style.backgroundColor = theme.secondary;
                button.style.color = theme.text;
            });
        }
    });
});
