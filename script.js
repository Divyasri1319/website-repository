// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Simple form submission handler
  document.getElementById('waitlist-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email-input').value;
    document.getElementById('form-message').textContent = `Thanks! We'll contact you at ${email} when we launch.`;
    document.getElementById('email-input').value = '';
  });

  // Simple demo simulation
  document.getElementById('demo-btn').addEventListener('click', function() {
    const result = document.getElementById('demo-result');
    result.textContent = "🔍 Scanning face...";
    
    setTimeout(() => {
      const isChild = Math.random() > 0.5;
      if (isChild) {
        result.innerHTML = "👶 Child detected! <br>Screen locked and parent notified.";
      } else {
        result.innerHTML = "👨 Adult detected <br>Screen remains unlocked.";
      }
    }, 1500);
  });
});