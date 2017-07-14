package researchAtlassianConnect;

import com.atlassian.connect.spring.AtlassianHostUser;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloWorld {

    @RequestMapping(value = "/hello-world", method = RequestMethod.GET)
    @ResponseBody
    public String helloWorld(@AuthenticationPrincipal AtlassianHostUser hostUser) {
        return "hello-world";
    }
}
