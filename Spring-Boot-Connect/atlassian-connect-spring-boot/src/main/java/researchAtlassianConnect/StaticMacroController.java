package researchAtlassianConnect;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.time.LocalTime;

@Controller
public class StaticMacroController {

    @GetMapping("/macro/static/dateTime-macro")
    public String DateTimeMacro(Model model) {
        addDateAndTime(model);
        return "staticDateTimeMacro";
    }

    private void addDateAndTime(Model model) {
        LocalDate localDate = LocalDate.now();
        LocalTime localTime = LocalTime.now();

        model.addAttribute("localDate", localDate);
        model.addAttribute("localTime", localTime);
    }
}


