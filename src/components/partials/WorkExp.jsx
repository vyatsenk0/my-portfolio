import { ThemeIcon, Text, Avatar, Timeline, Container, List } from '@mantine/core';

import { IconCircle } from '@tabler/icons-react';

//import classes from './WorkExp.module.css';

export function WorkExp() {
    return (
        <Container size="md" ta="center" mt="3em" style={{ display: 'flex', justifyContent: 'center' }}>
            <Timeline active={1} lineWidth={5} bulletSize={27} ml="lg" color="rgba(91, 67, 214, 1)">
                <Timeline.Item title="I&IT Technology Analyst/Developer" lineVariant="dashed">
                    <Text>@MPBSDP (Ministry of Public and Business Service Delivery and Procurement), Toronto, ON</Text>
                    <Text>January 2024 - July 2025 (1 year, 6 months)</Text>
    
                    {/* Bullet points */}
                    <List
                        spacing="xs"
                        size="sm"
                        mt="lg"
                        icon={
                        <ThemeIcon size={10} radius="xl" color="rgba(91, 67, 214, 1)">
                            <IconCircle size={6} />
                        </ThemeIcon>
                        }
                    >
                        <List.Item>Automate workflows and testing procedures, leveraging testing frameworks for efficient test automation.</List.Item>
                        <List.Item>Contribute to both front-end and back-end development using modern technologies.</List.Item>
                        <List.Item>Develop and maintain web-based applications, ensuring high performance, responsiveness, and availability.</List.Item>
                        <List.Item>Ensure adherence to project timelines, quality standards, and best coding practices through version control tools.</List.Item>
                        <List.Item>Work in a dynamic environment utilizing iterative project management for continuous improvement, time-boxed development cycles for efficient product delivery, and a structured development process with clear phases for comprehensive software creation.</List.Item>
                    </List>

                </Timeline.Item>

                <Timeline.Item bullet={<IconCircle size={14} stroke={5}/>}>
                </Timeline.Item>
            </Timeline>
        </Container>
    )
}