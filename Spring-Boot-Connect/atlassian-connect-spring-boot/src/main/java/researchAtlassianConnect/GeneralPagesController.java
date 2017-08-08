package researchAtlassianConnect;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GeneralPagesController {

    @GetMapping("/spring/generalPage/helloWorld")
    public String helloWorld() {
        return "generalPage/helloWorld";
    }

    @GetMapping("/spring/generalPage/testPage")
    public String testPage() {
        return "generalPage/testPage";
    }
}
