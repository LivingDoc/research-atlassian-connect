package researchAtlassianConnect;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class GeneralPagesController {

    @GetMapping("/spring/generalPage/helloWorld")
    public String helloWorld() {
        return "generalPage/helloWorld";
    }

    @GetMapping("/generalPage/testPage")
    public String testPage(Model model) {
        model.addAttribute("title", "This is a title");
        return "generalPage/testPage";
    }
}
