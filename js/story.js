/* ========================================
   STORY.JS - Comic-style Story Reader with Premium Effects
   ======================================== */

const storyData = [
    {
        image: "images/1.png",
        gradient: "bg-grad-mountains",
        text: "Ngày xưa, ở một vùng núi xa xôi có một học viện mang tên Thiên Trúc Sơn. Đó không phải là nơi đào tạo những chiến binh mạnh nhất, mà là nơi dạy học cho những sinh viên muốn hiểu thế giới."
    },
    {
        image: "images/2.png",
        gradient: "bg-grad-panda",
        text: "Trong học viện ấy có một chú mèo thông minh tên Miu. Miu nổi tiếng vì ba điều: tò mò, nhanh nhạy và cực kỳ ghét học Triết học."
    },
    {
        image: "images/3.png",
        gradient: "bg-grad-book",
        text: "Mỗi lần thầy giáo giảng đến những khái niệm như 'vật chất', 'biện chứng', 'nhận thức'... Miu đều cảm thấy đầu óc quay cuồng. Với chú mèo này, Triết học chỉ là những từ ngữ nhưng nhạt."
    },
    {
        image: "images/4.png",
        gradient: "bg-grad-panda",
        text: "Trong khi các bạn khác chăm chỉ luyện tập, Miu lại trốn ra sân vườn để đua với chuột. Chú luôn nghĩ rằng: 'Chỉ cần sống theo bản năng là đủ, cần gì phải suy tư những chuyện phức tạp.'"
    },
    {
        image: "images/5.png",
        gradient: "bg-grad-storm",
        text: "Cho đến một đêm mưa lớn, mọi thứ thay đổi. Miu bị phạt dọn thư viện cũ dưới tầng hầm. Trong lúc đang lau bụi, Miu vô tình làm rơi một cuốn sách cũ."
    },
    {
        image: "images/6.png",
        gradient: "bg-grad-magic",
        text: "Sau cuốn sách là một bộ bài phát sáng màu vàng kim. Trên hộp bài có dòng chữ: 'Người muốn thay đổi cuộc đời mình phải học cách hiểu thế giới. Hành trình bắt đầu từ đây.'"
    },
    {
        image: "images/7.png",
        gradient: "bg-grad-cosmos",
        text: "Miu tò mò chạm vào lá bài đầu tiên. Ngay lập tức, ánh sáng bao trùm toàn bộ căn phòng. Chú bị hút vào một không gian vô tận. Một giọng nói vang lên: 'Chào mừng bạn đến hành trình ngộ triết.'"
    },
    {
        image: "images/8.png",
        gradient: "bg-grad-mountains",
        text: "Miu bước vào thế giới đầu tiên. Ở đó, chú nhìn thấy núi non, sông biển, bầu trời. Một vị sư già hỏi: 'Bạn nghĩ những thứ này tồn tại vì bạn nhìn thấy chúng, hay chúng tồn tại độc lập?'"
    },
    {
        image: "images/9.png",
        gradient: "bg-grad-cosmos",
        text: "Lần đầu tiên Miu hiểu rằng thế giới không phụ thuộc vào suy nghĩ của mình. Núi vẫn là núi dù không ai quan sát. Dòng sông vẫn chảy dù không ai nghe tiếng nước."
    },
    {
        image: "images/10.png",
        gradient: "bg-grad-mirror",
        text: "Vị sư dẫn Miu tới một căn phòng đầy gương. Vị sư nói: 'Ý thức của bạn không tự sinh ra. Nó phản ánh thế giới mà bạn đã trải qua.' Miu nhận ra chú đã sống như một con mèo bị mù quáng."
    },
    {
        image: "images/11.png",
        gradient: "bg-grad-leaves",
        text: "Càng đi tiếp, Miu càng thấy mọi thứ luôn thay đổi: lá úa rồi mọc lại, nước bốc hơi rồi thành mưa. Chú hiểu: mọi sự vật đều luôn vận động, luôn phát triển theo quy luật."
    },
    {
        image: "images/12.png",
        gradient: "bg-grad-battle",
        text: "Ở cánh cổng tiếp theo, Miu gặp Hắc Miu - kẻ nã, ngông cuồng. Miu càng đánh, Hắc Miu càng mạnh. Miu hét lên: 'Tại sao ta không thể thắng được kẻ này?'"
    },
    {
        image: "images/13.png",
        gradient: "bg-grad-mirror",
        text: "Hắc Miu cười: 'Vì ta chính là bạn.' Miu hiểu rằng con người luôn tồn tại những mặt đối lập: mạnh và yếu, tốt và xấu. Không thể trưởng thành nếu chỉ loại bỏ cái xấu."
    },
    {
        image: "images/14.png",
        gradient: "bg-grad-battle",
        text: "Miu đun một nồi nước khổng lồ. Suốt thời gian dài, nước vẫn không đổi dù nhiệt độ tăng cao. Nhưng khi đạt đúng 100 độ, toàn bộ nước hóa thành hơi nước."
    },
    {
        image: "images/15.png",
        gradient: "bg-grad-water",
        text: "'Có những thay đổi nhỏ tích lũy âm thầm, cho tới một thời điểm sẽ tạo ra bước chuyển lớn.' Miu hiểu rằng sự trưởng thành cũng cần thời gian và kiên trì."
    },
    {
        image: "images/16.png",
        gradient: "bg-grad-storm",
        text: "Nhưng rồi một thất bại lớn xảy ra. Miu thua hoàn toàn. Chú mất niềm tin vào bản thân và muốn bỏ cuộc, nằm gục xuống trong bóng tối."
    },
    {
        image: "images/17.png",
        gradient: "bg-grad-sprout",
        text: "Vị sư đưa cho Miu một hạt tre: 'Bạn nghĩ hạt tre biến mất khi cây tre mọc lên sao? Không, nó vẫn tồn tại trong hình dạng mới.' Miu hiểu rằng cái cũ biến mất thành cái mới."
    },
    {
        image: "images/18.png",
        gradient: "bg-grad-bridge",
        text: "Miu tới một ngôi làng nghèo nơi cây cầu duy nhất đã sập. Miu lao vào đọc sách sửa cầu và tin rằng mình đã giỏi. Nhưng khi làm thật, cầu đổ sụp lần nữa."
    },
    {
        image: "images/19.png",
        gradient: "bg-grad-bridge",
        text: "Vị sư nói: 'Kiến thức không được kiểm chứng bằng thực tế chỉ là lý thuyết.' Miu bắt đầu học từ dân làng cách đo dòng nước, buộc dây, sử dụng nguyên liệu địa phương."
    },
    {
        image: "images/20.png",
        gradient: "bg-grad-city",
        text: "Trên chặng cuối, Miu đi qua những nhà máy, thành phố đông đúc. Chú chứng kiến con người lao động để tồn tại. Chú thấy xã hội thay đổi khi mọi người thay đổi cách làm việc."
    },
    {
        image: "images/21.png",
        gradient: "bg-grad-city",
        text: "Miu nhận ra: chính những người lao động bình thường mới là những người thực sự xây dựng nên xã hội. Một mèo có thể thông minh, nhưng hàng triệu tay con người mới tạo nên nền văn minh."
    },
    {
        image: "images/22.png",
        gradient: "bg-grad-panda",
        text: "Sau khi hoàn thành lá bài cuối cùng, Miu trở về học viện. Chú không còn là chú mèo hung hăng ngày nào. Miu nhìn bầu trời rồi mỉm cười thanh thản."
    },
    {
        image: "images/23.png",
        gradient: "bg-grad-book",
        text: "Chú hiểu rằng Triết học không phải là lý thuyết khô khan. Nó là cách nhìn thế giới, cách hiểu con người, và cách trưởng thành từ chính trải nghiệm của bản thân."
    },
    {
        image: "images/24.png",
        gradient: "bg-grad-magic",
        text: "52 lá bài bay lên giữa bầu trời đêm rực rỡ. Mỗi lá bài là một bài học. Mỗi thử thách là một bước trưởng thành trên hành trình cuộc đời."
    },
    {
        image: "images/25.png",
        gradient: "bg-grad-cosmos",
        text: "'Ngộ Triết không phải trở thành kẻ thông minh nhất. Mà là học cách hiểu cuộc đời.' Miu đã thực sự tìm thấy bản ngã của mình qua những bài học từ triết học."
    }
];

class StoryReader {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        this.currentSlide = 0;
        this.totalSlides = storyData.length;
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        this.container.innerHTML = ''; // Clear container

        const wrapper = document.createElement('div');
        wrapper.className = 'story-card-wrapper';
        wrapper.style.position = 'relative';

        storyData.forEach((slide, index) => {
            const slideEl = document.createElement('div');
            slideEl.className = `story-slide ${index === 0 ? 'active' : ''}`;

            slideEl.innerHTML = `
                <div class="comic-frame">
                    <div class="comic-illustration-container ${slide.gradient}">
                        <div class="cosmic-dust"></div>
                        <div class="comic-illustration">
                            <img src="${slide.image}" alt="Minh họa ${index + 1}" class="story-image">
                        </div>
                    </div>
                    <div class="comic-text-bubble">${slide.text}</div>
                </div>
            `;
            wrapper.appendChild(slideEl);
        });

        // Thêm overlay nav ở giữa 2 bên thẻ
        const overlayNav = document.createElement('div');
        overlayNav.className = 'story-overlay-nav';
        overlayNav.innerHTML = `
            <button class="story-overlay-btn overlay-prev-btn" aria-label="Trang trước">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <button class="story-overlay-btn overlay-next-btn" aria-label="Trang tiếp theo">
                <span class="material-symbols-outlined">arrow_forward</span>
            </button>
        `;
        wrapper.appendChild(overlayNav);

        const controls = document.createElement('div');
        controls.className = 'story-controls';
        controls.innerHTML = `
            <span class="story-progress"><span class="current-page">1</span> / <span class="total-pages">${this.totalSlides}</span></span>
        `;

        this.container.appendChild(wrapper);
        this.container.appendChild(controls);
        this.updateButtons();
    }

    attachEventListeners() {
        const overlayPrevBtn = this.container.querySelector('.overlay-prev-btn');
        const overlayNextBtn = this.container.querySelector('.overlay-next-btn');

        if (overlayPrevBtn) overlayPrevBtn.addEventListener('click', () => this.prevSlide());
        if (overlayNextBtn) overlayNextBtn.addEventListener('click', () => this.nextSlide());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(index) {
        const slides = this.container.querySelectorAll('.story-slide');
        if (!slides[this.currentSlide] || !slides[index]) return;

        const oldSlide = slides[this.currentSlide];
        const newSlide = slides[index];

        // Slide cũ sẽ thoát ra
        oldSlide.classList.remove('active');
        oldSlide.classList.add('exit');

        // Slide mới sẽ xuất hiện ngay lập tức (giao thoa mượt mà)
        newSlide.classList.add('active');

        this.currentSlide = index;
        this.updateProgress();
        this.updateButtons();

        // Dọn dẹp class exit sau khi hiệu ứng kết thúc (600ms tương ứng với CSS transition 0.6s)
        setTimeout(() => {
            oldSlide.classList.remove('exit');
        }, 600);
    }

    updateProgress() {
        const currentPage = this.container.querySelector('.current-page');
        if (currentPage) {
            currentPage.textContent = this.currentSlide + 1;
        }
    }

    updateButtons() {
        const overlayPrevBtn = this.container.querySelector('.overlay-prev-btn');
        const overlayNextBtn = this.container.querySelector('.overlay-next-btn');

        const isFirst = this.currentSlide === 0;
        const isLast = this.currentSlide === this.totalSlides - 1;

        if (overlayPrevBtn) overlayPrevBtn.classList.toggle('disabled', isFirst);
        if (overlayNextBtn) overlayNextBtn.classList.toggle('disabled', isLast);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('story-reader');
    if (storyContainer) {
        new StoryReader('story-reader');
    }
});
