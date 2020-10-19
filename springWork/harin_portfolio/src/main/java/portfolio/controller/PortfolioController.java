package portfolio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class PortfolioController {
	@RequestMapping(value="/main", method=RequestMethod.GET)
	public ModelAndView main() {
		System.out.println("main 들어옴");
		ModelAndView mav = new ModelAndView();
		mav.setViewName("/resources/portfolio/main"); 
		return mav;
	}
}
