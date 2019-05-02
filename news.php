<?php include './header.php'; ?>
    <div class="banner-main">
        <div class="img-bg">
            <img src="./images/img_22.png" alt="Image">
        </div>
        <div class="content">
            <div class="left">
                <h2 class="title">Tin tức</h2>
            </div>
            <div class="search">
                <form action="/">
                    <input type="text" placeholder="Tìm kiếm">
                    <button type="button"><img src="./images/search.svg" alt="Search"></button>
                </form>
            </div>
        </div>
    </div>

    <div class="mt-80 news news-a">
        <div class="content">
            <div class="row">
                <div class="col-lg-8">
                    <div class="big-box">
                        <img class="img-top" src= "./images/img_8.png" alt="Img">
                        <h3 class="title">Chàng trai dẫn bà nội đi tìm cháu dâu tương lai tại 'Bạn muốn hẹn hò'</h3>
                        <p class="text">Tại chương trình "Bạn muốn hẹn hò" số 456 phát sóng chiều 27/1, Nguyễn Khánh liên tục khiến khán giả trường quay bật cười với màn thể hiện trước bạn gái.</p>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="small-box">
                        <img class="img-top" src="./images/img_27.png" alt="">
                        <h4 class="title">Cha vợ tương lai liên tục chất vấn con rể tại 'Bạn muốn hẹn hò'</h4>
                    </div>

                    <div class="small-box">
                        <img class="img-top" src="./images/img_28.png" alt="">
                        <h4 class="title">Cha vợ tương lai liên tục chất vấn con rể tại 'Bạn muốn hẹn hò'</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="banner-header-offline-schedule banner-header-offline-schedule-a container-fluid">
         <span class="icon-bg icon-bg-1">
            <img src="./images/icon-bg-1.svg" alt="Bg">
        </span>
        <span class="icon-bg icon-bg-2">
            <img src="./images/icon-bg-2.svg" alt="Bg">
        </span>
        <span class="icon-bg icon-bg-3">
            <img src="./images/icon-bg-3.svg" alt="Bg">
        </span>
        <span class="icon-bg icon-bg-4">
            <img src="./images/icon-bg-4.svg" alt="Bg">
        </span>
        <div class="main-content">

            <div class="content">
                <h2 class="title">Bạn muốn tìm nửa kia của đời mình?</h2>
                <h3 class="sub-title">Hãy để chúng tôi giúp bạn</h3>
                <button class="btn btn-pink">Đăng ký tài khoản ngay</button>
            </div>
            <div class="img-bg">
                <img src="./images/img_13.png" alt="Image">
            </div>
        </div>
    </div>

    <div class="gallery m0">
        <div class="gallery-top">

            <div class="top-title">
                <h2 class="title">tin tức truyền hình</h2>
                <span></span>
            </div>
        </div>
        <div class="list-gallery m0">
            <img src="./images/img_17.png" alt="Image">
            <img src="./images/img_18.png" alt="Image">
            <img src="./images/img_9.png" alt="Image">
            <img src="./images/img_10.png" alt="Image">
        </div>
    </div>
    <div class="gallery m0">
        <div class="gallery-top">

            <div class="top-title">
                <h2 class="title">tin tức sự kiện offline</h2>
                <span></span>
            </div>
        </div>
        <div class="list-gallery m0">
            <img src="./images/img_17.png" alt="Image">
            <img src="./images/img_18.png" alt="Image">
            <img src="./images/img_9.png" alt="Image">
            <img src="./images/img_10.png" alt="Image">
        </div>
    </div>
    <div class="gallery m0">
        <div class="gallery-top">

            <div class="top-title">
                <h2 class="title">tâm sự hẹn hò</h2>
                <span></span>
            </div>
        </div>
        <div class="list-gallery m0">
            <img src="./images/img_17.png" alt="Image">
            <img src="./images/img_18.png" alt="Image">
            <img src="./images/img_9.png" alt="Image">
            <img src="./images/img_10.png" alt="Image">
        </div>
    </div>
    <?php
        include './pagination.php';
    ?>
<?php include './footer.php'; ?>