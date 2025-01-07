// Thai massage theme colors
const theme = {
  primary: '#8B4513',      // Rich brown - represents traditional Thai wood
  secondary: '#DAA520',    // Golden - represents Thai temples
  accent: '#66BB6A',       // Soft green - represents Thai herbs
  background: '#FFF8E7',   // Warm cream - creates a serene atmosphere
  surface: '#FFF3D4',      // Light warm tone
  text: '#4A3728',         // Warm dark brown
  gold: '#FFD700'          // Accent gold for decorative elements
};

$w.onReady(function () {
    // Apply global styles
    $w('Document').style.backgroundColor = theme.background;
    
    // Style header with Thai-inspired design
    $w('#siteHeader').style.backgroundColor = theme.primary;
    $w('#siteHeader Text').style.color = theme.gold;
    
    // Navigation styling
    $w('#mainNav').style.backgroundColor = theme.primary;
    $w('#mainNav Link').forEach(link => {
        link.style.color = theme.gold;
        link.style.fontFamily = 'Palatino';
        
        // Hover effect
        link.onMouseIn(() => {
            link.style.color = theme.secondary;
        });
        
        link.onMouseOut(() => {
            link.style.color = theme.gold;
        });
    });
    
    // Style all text elements
    $w('Text').forEach(text => {
        text.style.fontFamily = 'Palatino';
        text.style.color = theme.text;
    });
    
    // Style buttons with Thai-inspired design
    $w('Button').forEach(button => {
        button.style.backgroundColor = theme.accent;
        button.style.color = theme.background;
        button.style.borderRadius = '4px';
        button.style.border = `2px solid ${theme.secondary}`;
        
        // Hover effect
        button.onMouseIn(() => {
            button.style.backgroundColor = theme.secondary;
            button.style.border = `2px solid ${theme.accent}`;
        });
        
        button.onMouseOut(() => {
            button.style.backgroundColor = theme.accent;
            button.style.border = `2px solid ${theme.secondary}`;
        });
    });
    
    // Footer styling
    $w('#siteFooter').style.backgroundColor = theme.primary;
    $w('#siteFooter Text').style.color = theme.gold;
});
