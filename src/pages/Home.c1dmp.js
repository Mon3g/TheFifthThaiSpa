import { useEffect } from 'react';

// Theme colors
const theme = {
  primary: '#FF1493',    // Pink
  secondary: '#FFD700',  // Golden Yellow
  background: '#FFFFFF', // White
  surface: '#F5F5F5',   // Light Gray
  text: '#333333'       // Dark Gray for text
};

$w.onReady(function () {
    // Header styling
    $w('#header').style.backgroundColor = theme.primary;
    $w('#navigationBar').style.backgroundColor = theme.primary;
    $w('#navigationBar').style.color = theme.background;

    // Main content
    $w('#mainContent').style.backgroundColor = theme.background;
    $w('Text').forEach(text => {
        text.style.color = theme.text;
    });

    // Buttons
    $w('Button').forEach(button => {
        button.style.backgroundColor = theme.secondary;
        button.style.color = theme.text;
        button.style.borderColor = theme.primary;
    });

    // Links
    $w('Link').forEach(link => {
        link.style.color = theme.primary;
    });

    // Footer
    $w('#footer').style.backgroundColor = theme.surface;
    $w('#footer Text').style.color = theme.text;
});