document.addEventListener("DOMContentLoaded",(event)=>{
    setTimeout(()=>{
        document.querySelector("#load-inframe-map").innerHTML=`<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidht="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d833.3422493634098!2d-65.1974301291262!3d-26.8267363936194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1be8b54a5b%3A0xef49f5dfdd183d4!2sSan%20Juan%20118!5e0!3m2!1ses-419!2sar!4v1703889493921!5m2!1ses-419!2sar"></iframe>
    `;
    },500);
    
})