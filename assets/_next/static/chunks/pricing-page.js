// First MutationObserver for the '.modules-pp' section
const observer1 = new MutationObserver((mutationsList, observer) => {
    const modulesSection = document.querySelector('.modules-pp');
    if (!modulesSection) {
        const newSection = document.createElement('section');
        newSection.className = 'modules-pp';
        newSection.innerHTML = `
            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center; height: 100vh; width: 100vw; padding: 40px; box-sizing: border-box; background-color: #f9f9f9;">
                <!-- Contact Form -->
                <div style="flex: 1; margin-right: 20px; background: #fff; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 8px;">
                    <h2 style="margin-bottom: 20px;">Contact Us</h2>
                    <form>
                        <label for="name" style="display: block; margin-bottom: 10px;">
                            Name:
                            <input type="text" id="name" name="name" style="width: 100%; padding: 12px; margin-top: 5px; border: 1px solid #ccc; border-radius: 4px;" required>
                        </label>
                        <label for="email" style="display: block; margin-bottom: 10px;">
                            Email:
                            <input type="email" id="email" name="email" style="width: 100%; padding: 12px; margin-top: 5px; border: 1px solid #ccc; border-radius: 4px;" required>
                        </label>
                        <label for="message" style="display: block; margin-bottom: 10px;">
                            Message:
                            <textarea id="message" name="message" style="width: 100%; padding: 12px; margin-top: 5px; border: 1px solid #ccc; border-radius: 4px;" rows="5" required></textarea>
                        </label>
                        <button type="submit" style="padding: 12px 20px; background-color: #007BFF; color: white; border: none; border-radius: 4px; cursor: pointer;">Submit</button>
                    </form>
                </div>

                <!-- Contact Information -->
                <div style="flex: 1; background: #fff; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 8px;">
                    <h2 style="margin-bottom: 20px;">Contact Information</h2>
                    <p><strong>Phone:</strong> +1 234 567 890</p>
                    <p><strong>Email:</strong> contact@sampledomain.com</p>
                    <p><strong>Address:</strong></p>
                    <p>123 Sample Street,<br>City, State, 12345</p>
                    <p><strong>Business Hours:</strong></p>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM<br>Saturday: 10:00 AM - 2:00 PM<br>Sunday: Closed</p>
                </div>
            </div>
        `;
        document.querySelector('header').after(newSection);
        console.log('Modules section re-added');
    }
});

// Observe changes in the document body
observer1.observe(document.body, { childList: true, subtree: true });
