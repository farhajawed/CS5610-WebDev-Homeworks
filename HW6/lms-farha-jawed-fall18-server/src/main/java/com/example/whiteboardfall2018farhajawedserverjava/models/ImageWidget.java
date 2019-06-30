package com.example.whiteboardfall2018farhajawedserverjava.models;

import javax.persistence.Entity;

@Entity
public class ImageWidget extends Widget{
	
	private String url;
	
	public ImageWidget() {
		
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	@Override
	public void set(Widget newWidget) {
		super.set(newWidget);
		this.url = ((ImageWidget) newWidget).url;
	}
}
