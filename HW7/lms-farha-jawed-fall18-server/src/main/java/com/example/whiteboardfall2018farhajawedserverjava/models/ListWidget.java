package com.example.whiteboardfall2018farhajawedserverjava.models;

import javax.persistence.Entity;

@Entity
public class ListWidget extends Widget {
	private String options;
	private String listType;
	
	public ListWidget() {
		
	}
	public String getListType() {
		return listType;
	}
	public void setListType(String listType) {
		this.listType = listType;
	}
	public String getOptions() {
		return options;
	}
	public void setOptions(String options) {
		this.options = options;
	}
	
	@Override
	public void set(Widget newWidget) {
		super.set(newWidget);
		this.listType = ((ListWidget) newWidget).listType;
		this.options = ((ListWidget) newWidget).options;
	}
}


