package researchAtlassianConnect;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DynamicMacroController {

    // Macro that returns a html where the current date and time is shown
    @GetMapping("/spring/macro/dynamic/date-time")
    public String dateTime() {
        return "macro/dynamic/dateTime";
    }

}
