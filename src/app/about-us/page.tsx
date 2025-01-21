"use client"
import MainLayout from "@/components/layouts/MainLayout";
import {Accordion, AccordionItem} from "@heroui/accordion";

function AboutUs() {
    return (
        <MainLayout>
            <h3 className="text-2xl md:text-3xl font-bold text-palette-50 pb-7 md:pb-10 lg:pb-6 -mt-1">ویانا؟</h3>
            <Accordion selectionMode="multiple" itemClasses={{
                title: "font-medium text-base md:text-xl",
                content: "font-normal text-sm md:text-base"
            }}>
                <AccordionItem key="1" title="لورم ایپسوم متن؟">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </AccordionItem>
                <AccordionItem key="2" title="لورم ایپسوم متن؟">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </AccordionItem>
                <AccordionItem key="3" title="لورم ایپسوم متن؟">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </AccordionItem>
                <AccordionItem key="4" title="لورم ایپسوم متن؟">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </AccordionItem>
                <AccordionItem key="5" title="لورم ایپسوم متن؟">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </AccordionItem>
                <AccordionItem key="6" title="لورم ایپسوم متن؟">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
                    و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </AccordionItem>
            </Accordion>
        </MainLayout>
    );
}

export default AboutUs;