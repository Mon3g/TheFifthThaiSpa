// Import theme from masterPage
const theme = {
  primary: '#8B4513',      // Rich brown
  secondary: '#DAA520',    // Golden
  accent: '#66BB6A',       // Soft green
  background: '#FFF8E7',   // Warm cream
  surface: '#FFF3D4',      // Light warm tone
  text: '#4A3728',         // Warm dark brown
  gold: '#FFD700'          // Accent gold
};

$w.onReady(function () {
    // Style main content area
    $w('#mainContent').style.backgroundColor = theme.background;
    
    // Style headings
    $w('Heading').forEach(heading => {
        heading.style.fontFamily = 'Palatino';
        heading.style.color = theme.primary;
        heading.style.textAlign = 'center';
    });

    // Style text elements
    $w('Text').forEach(text => {
        text.style.fontFamily = 'Palatino';
        text.style.color = theme.text;
        text.style.lineHeight = '1.6';
    });

    // Style service boxes
    $w('Box').forEach(box => {
        box.style.backgroundColor = theme.surface;
        box.style.borderRadius = '8px';
        box.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        box.style.border = `1px solid ${theme.secondary}`;
        box.style.padding = '20px';
        
        // Hover effect
        box.onMouseIn(() => {
            box.style.backgroundColor = theme.background;
            box.style.transform = 'translateY(-5px)';
            box.style.transition = 'all 0.3s ease';
        });
        
        box.onMouseOut(() => {
            box.style.backgroundColor = theme.surface;
            box.style.transform = 'translateY(0)';
        });
    });

    // Style images
    $w('Image').forEach(image => {
        image.style.borderRadius = '8px';
        image.style.border = `3px solid ${theme.secondary}`;
    });

    // Style buttons
    $w('Button').forEach(button => {
        button.style.backgroundColor = theme.accent;
        button.style.color = theme.background;
        button.style.borderRadius = '4px';
        button.style.border = `2px solid ${theme.secondary}`;
        button.style.padding = '12px 24px';
        button.style.fontSize = '16px';
        button.style.fontFamily = 'Palatino';
        
        // Hover effect
        button.onMouseIn(() => {
            button.style.backgroundColor = theme.secondary;
            button.style.border = `2px solid ${theme.accent}`;
            button.style.transform = 'scale(1.05)';
            button.style.transition = 'all 0.3s ease';
        });
        
        button.onMouseOut(() => {
            button.style.backgroundColor = theme.accent;
            button.style.border = `2px solid ${theme.secondary}`;
            button.style.transform = 'scale(1)';
        });
    });
});
