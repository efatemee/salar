import Navbar from "../../components/navbar/Navbar";
import styled from "../../pages/aboutUS/AboutUS.module.css";
import iran from "../../assets/image/iran.webp";
import Footer from "../../components/footer/footer";
function AboutUS() {
  return (
    <div className={styled.about}>
      <Navbar title="سالار" />
      <div className="container">
        <h1>درباره ما</h1>
        <p>
          صفحه درباره ما را طوری بنویسید، که مشتری یا کاربر تصور کند که خود صاحب
          شرکت یا مدیر آن را نوشته است. این کار حس مثبت و اعتماد را در مشتری
          ایجاد می‌کند. استفاده از کلمات اول شخص مفرد و جمع یعنی «من» و «ما» در
          نوشتن صفحه درباره ما بهتر و مناسب‌تر می باشد. سعی کنید نوشتار شما
          کاملا روان و با استفاده از کلمات ساده، قابل فهم و خودمانی باشد. در
          مورد برند شرکت خود صمیمانه و به‌دور از لحنی رسمی و جدی صحبت بنویسید.
          داشتن حس شوخ طبعی در نوشتار شما تاثیر مفیدی بر خواننده خواهد گذاشت. پس
          طوری بنویسید که گویی با یک شخص دارید حرف میزنید و آن شخص کاربر و مشتری
          شما است نه یک رئیس شرکت یا گروهی از پرسنل.
        </p>
        <h4>فعالیت ما در کدام شهر هاست؟</h4>
        <img src={iran} alt="iran" />
      </div>
      <Footer />
    </div>
  );
}
export default AboutUS;
