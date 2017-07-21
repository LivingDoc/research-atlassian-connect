package researchAtlassianConnect;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GeneralPagesController {

    @GetMapping("/spring/helloWorld")
    public String helloWorld() {
        return "helloWorld";
    }
}
