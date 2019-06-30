package com.example.whiteboardfall2018farhajawedserverjava.models;

import javax.persistence.Entity;

@Entity
public class LinkWidget extends Widget{
	private String href;

	public LinkWidget() {
		
	}
	public String getHref() {
		return href;
	}


	public void setHref(String href) {
		this.href = href;
	}


	@Override
	public void set(Widget newWidget) {
		super.set(newWidget);
		this.href = ((LinkWidget) newWidget).href;
	}
	
}
