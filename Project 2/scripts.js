$(document).ready(function() {
    var galleryExpanded = false;


    document.querySelectorAll('.gallery img').forEach(function(img) {
        img.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1000';

            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';

            modal.appendChild(enlargedImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
        });
    });


    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        submitHandler: function(form) {
            $.ajax({
                url: "submit_form.php",
                method: "POST",
                data: $(form).serialize(),
                success: function(response) {
                    toastr.success("Message sent successfully!");
                },
                error: function(error) {
                    toastr.error("An error occurred. Please try again.");
                }
            });
        }
    });

    $.ajax({
        url: "data/blog_posts.json",
        method: "GET",
        dataType: "json",
        success: function(data) {
            var blogContainer = $("#blog");
            data.posts.forEach(function(post) {
                var postElement = `
                    <div class="blog-post">
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <a href="${post.url}" class="btn btn-primary">Read More</a>
                    </div>
                `;
                blogContainer.append(postElement);
            });
        },
        error: function(error) {
            console.error("Error fetching blog posts", error);
        }
    });

    $(".thumbnail").click(function() {
        var imgSrc = $(this).attr("src").replace("thumb", "image");
        $("#galleryImage").attr("src", imgSrc);
        $("#galleryModal").modal("show");
    });


    $(".modal-content").click(function(event) {
        event.stopPropagation();
    });
});


    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        
        const currentTheme = localStorage.getItem('theme') || 'light';
        body.classList.add(currentTheme + '-theme');
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }

        themeToggle.addEventListener('change', function() {
            if (themeToggle.checked) {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
                toastr.success('Dark mode enabled');
            } else {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
                toastr.success('Light mode enabled');
            }
        });
    });

 

  

